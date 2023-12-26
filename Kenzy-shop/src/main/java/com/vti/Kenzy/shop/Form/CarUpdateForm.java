package com.vti.Kenzy.shop.Form;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class CarUpdateForm {
    private String licensePlate;
    private LocalDate repairDate;
    private String customerName;
    private String catalogs;
    private String carMaker;
}
