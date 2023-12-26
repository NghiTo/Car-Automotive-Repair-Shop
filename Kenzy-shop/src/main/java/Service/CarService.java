package Service;

import com.vti.Kenzy.shop.Dto.CarDto;
import com.vti.Kenzy.shop.Entity.Car;
import com.vti.Kenzy.shop.Form.CarCreateForm;
import com.vti.Kenzy.shop.Form.CarUpdateForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CarService
{
    Page<CarDto> findAll(Pageable pageable);

    CarDto create(CarCreateForm form);

    CarDto update(CarUpdateForm form);

    void deleteById(Car.PrimaryKey id);
}
