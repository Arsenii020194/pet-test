package com.petshop.mybatis.mapper;

import com.petshop.mybatis.domain.Car;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CarMapper {
    @Select("SELECT * FROM CAR")
    List<Car> findAll();

    @Insert("INSERT INTO CAR(model, code, color) VALUES(#{model}, #{code}, #{color})")
    @Options(useGeneratedKeys = true, keyColumn="CAR.id")
    void create(Car car);

    @Update("UPDATE CAR SET model=#{model}, code=#{code}, color=#{color} WHERE id=#{id}")
    void update(Car car);

    @Delete("DELETE FROM CAR WHERE id=#{id}")
    void remove(Car car);
}
