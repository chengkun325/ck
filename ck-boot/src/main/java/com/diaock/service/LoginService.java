package com.diaock.service;

import com.diaock.pojo.SysUser;
import com.diaock.utils.Result;

public interface LoginService {
    Result<?> login(SysUser user);

    Result<?> logout();
}
