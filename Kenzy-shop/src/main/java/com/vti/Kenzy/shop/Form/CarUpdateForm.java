package com.vti.Kenzy.shop.Form;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CarUpdateForm
{
    private String licensePlate;
    private LocalDateTime repairDate;
    private String customerName;
    private String catalogs;
    private String carMaker;
}
