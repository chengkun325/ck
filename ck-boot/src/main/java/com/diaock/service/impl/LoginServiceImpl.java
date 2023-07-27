package com.diaock.service.impl;

import cn.hutool.http.HttpStatus;
import com.diaock.pojo.SysUser;
import com.diaock.pojo.dto.LoginUser;
import com.diaock.service.LoginService;
import com.diaock.utils.JwtUtil;
import com.diaock.utils.RedisCache;
import com.diaock.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import static com.diaock.constants.Constants.*;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private RedisCache redisCache;

    @Override
    public Result<?> login(SysUser user) {
        //AuthenticationManager authenticate进行用户认证
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword());
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);
        //如果认证没通过，给出提示
        if (Objects.isNull(authenticate)) {
            throw new RuntimeException(INCORRECT_USERNAME_OR_PASSWORD);
        }
        //如果认证通过了，使用userid生成一个jwt jwt存入Result返回
        LoginUser loginUser = (LoginUser) authenticate.getPrincipal();
        String userId = loginUser.getSysUser().getUserId().toString();
        String jwt = JwtUtil.createJWT(userId);
        Map<String, String> map = new HashMap<>();
        map.put(TOKEN, jwt);
        //把完整的用户信息存入redis，userid作为key
        redisCache.setCacheObject(LOGIN_KEY + userId, loginUser);
        //将token返回给前端
        return Result.success(HttpStatus.HTTP_OK, SUCCESS, map);
    }

    @Override
    public Result<?> logout() {
        // 从SecurityContextHolder中的userid
        UsernamePasswordAuthenticationToken authentication =
                (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();

        LoginUser loginUser = (LoginUser) authentication.getPrincipal();
        Long userId = loginUser.getSysUser().getUserId();

        // 根据userId找到redis对应的值进行删除
        redisCache.deleteObject(LOGIN_KEY + userId);
        return Result.success(HttpStatus.HTTP_OK, SUCCESS);
    }
}
