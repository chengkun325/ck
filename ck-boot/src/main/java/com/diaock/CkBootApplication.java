package com.diaock;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
@MapperScan("com.diaock.mapper")
public class CkBootApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext run = SpringApplication.run(CkBootApplication.class, args);
    }

}
