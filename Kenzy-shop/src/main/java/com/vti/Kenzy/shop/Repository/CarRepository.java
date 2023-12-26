package com.vti.Kenzy.shop.Repository;

import com.vti.Kenzy.shop.Entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Car.PrimaryKey>
{

}
