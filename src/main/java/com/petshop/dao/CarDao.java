package com.petshop.dao;

import com.petshop.mybatis.domain.Car;

import java.util.List;

public interface CarDao {
    List<Car> findAll();

    void create(Car car);

    void update(Car car);

    void remove(Car car);
}
