package com.petshop.dao.impl;

import com.petshop.dao.CarDao;
import com.petshop.mybatis.domain.Car;
import com.petshop.mybatis.mapper.CarMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarDaoImpl implements CarDao {

    private CarMapper mapper;

    @Override
    public List<Car> findAll() {
        return mapper.findAll();
    }

    @Override
    public void create(Car car) {
        mapper.create(car);
    }

    @Override
    public void update(Car car) {
        mapper.update(car);
    }

    @Override
    public void remove(Car car) {
        mapper.remove(car);
    }

    @Autowired
    public void setMapper(CarMapper mapper) {
        this.mapper = mapper;
    }
}
