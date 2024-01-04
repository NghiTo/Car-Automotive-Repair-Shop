package com.vti.Kenzy.shop.Service;

import com.vti.Kenzy.shop.Dto.AccessoryDto;
import com.vti.Kenzy.shop.Form.AccessoryCreateForm;
import com.vti.Kenzy.shop.Form.AccessoryUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AccessoryService
{
    Page<AccessoryDto> findAll(Pageable pageable);

    AccessoryDto create(AccessoryCreateForm form);

    AccessoryDto update(AccessoryUpdateForm form, Long id);;

    void deleteById(Long id);
}
