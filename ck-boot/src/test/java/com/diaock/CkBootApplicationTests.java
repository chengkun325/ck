package com.diaock;

import com.diaock.mapper.SysMenuMapper;
import com.diaock.mapper.SysUserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class CkBootApplicationTests {

    @Autowired
    private SysUserMapper userMapper;

    @Autowired
    private SysMenuMapper menuMapper;

    @Test
    public void test() {
        System.out.println(menuMapper.selectPermsByUserId(1L));
    }

}
