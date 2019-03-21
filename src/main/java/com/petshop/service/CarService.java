package com.petshop.service;

import com.petshop.mybatis.domain.Car;

import java.util.List;

public interface CarService {
    List<Car> findAll();

    void create(Car car);

    void update(Car car);

    void remove(Car car);
}
