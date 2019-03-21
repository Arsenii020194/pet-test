package com.petshop.mybatis.mapper;

import com.petshop.mybatis.domain.Car;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CarMapper {
    List<Car> findAll();
    void create(Car car);
    void update(Car car);
    void remove(Car car);
}
