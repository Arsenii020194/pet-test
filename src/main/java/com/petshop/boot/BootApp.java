package com.petshop.boot;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.petshop"})
@MapperScan("com.petshop.mybatis.mapper")
public class BootApp {

    public static void main(String[] args) {
        SpringApplication.run(BootApp.class, args);
    }

}
