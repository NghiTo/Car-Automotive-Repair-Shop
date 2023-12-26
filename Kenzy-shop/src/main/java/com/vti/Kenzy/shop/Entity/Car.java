package com.vti.Kenzy.shop.Entity;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Car")
public class Car {
    @EmbeddedId
    private PrimaryKey pk;

    @Getter
    @Setter
    @EqualsAndHashCode
    @Embeddable
    public static class PrimaryKey
    {
        @Column(name = "License_plate", length = 10, nullable = false)
        private String licensePlate;

        @Column(name = "Repair_date", nullable = false)
        private LocalDate repairDate;
    }

    @Column(name = "Customer_name", nullable = false, length = 100)
    private String customerName;

    @Column(name = "Catalogs", nullable = false, length = 100)
    private String catalogs;

    @Column(name = "Car_maker", nullable = false, length = 20)
    private String carMaker;

    @OneToMany(mappedBy = "car")
    private List<Accessory> accessories;
}
