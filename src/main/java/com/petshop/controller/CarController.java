package com.petshop.controller;

import com.petshop.mybatis.domain.Car;
import com.petshop.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * CrossOrigin enabled for dev mode.
 */
@RestController
@RequestMapping("/car")
public class CarController {

    private CarService carService;

    @RequestMapping(value = "/findAll", method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public List<Car> findAll() {
        return carService.findAll();
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void create(@RequestBody Car car) {
        carService.create(car);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public void update(@RequestBody Car car) {
        carService.update(car);
    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public void remove(@RequestBody Car car) {
        carService.remove(car);
    }

    @Autowired
    public void setCarService(CarService carService) {
        this.carService = carService;
    }
}
