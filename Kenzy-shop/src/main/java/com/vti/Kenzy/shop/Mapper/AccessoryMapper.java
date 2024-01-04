package com.vti.Kenzy.shop.Mapper;

import com.vti.Kenzy.shop.Dto.AccessoryDto;
import com.vti.Kenzy.shop.Entity.Accessory;
import com.vti.Kenzy.shop.Form.AccessoryCreateForm;
import com.vti.Kenzy.shop.Form.AccessoryUpdateForm;

public class AccessoryMapper
{
    public static Accessory map(AccessoryCreateForm form)
    {
        var accessory = new Accessory();
        accessory.setName(form.getName());
        accessory.setPrice(form.getPrice());
        accessory.setStatusDamaged(form.getStatusDamaged());
        accessory.setRepairStatus(form.getRepairStatus());
        return accessory;
    }
    public static AccessoryDto map(Accessory accessory)
    {
        var dto = new AccessoryDto();
        dto.setId(accessory.getId());
        var carPk = accessory.getCar().getPk();
        dto.setLicensePlate(carPk.getLicensePlate());
        dto.setRepairDate(carPk.getRepairDate());
        dto.setName(accessory.getName());
        dto.setPrice(accessory.getPrice());
        dto.setStatusDamaged(accessory.getStatusDamaged());
        dto.setRepairStatus(accessory.getRepairStatus());
        return dto;
    }
    public static void map(AccessoryUpdateForm form, Accessory accessory)
    {
        accessory.setName(form.getName());
        accessory.setPrice(form.getPrice());
        accessory.setStatusDamaged(form.getStatusDamaged());
        accessory.setRepairStatus(form.getRepairStatus());
    }
}
