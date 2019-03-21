package com.petshop.service.impl;

import com.petshop.dao.CarDao;
import com.petshop.mybatis.domain.Car;
import com.petshop.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class CarServiceImpl implements CarService {

    private CarDao carDao;

    @Override
    public List<Car> findAll() {
        return carDao.findAll();
    }

    @Override
    public void create(Car car) {
        carDao.create(car);
    }

    @Override
    public void update(Car car) {
        carDao.update(car);
    }

    @Override
    public void remove(Car car) {
        carDao.remove(car);
    }

    @Autowired
    public void setCarDao(CarDao carDao) {
        this.carDao = carDao;
    }
}
