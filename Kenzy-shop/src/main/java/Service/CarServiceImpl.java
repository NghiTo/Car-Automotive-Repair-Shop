package Service;

import com.vti.Kenzy.shop.Dto.CarDto;
import com.vti.Kenzy.shop.Entity.Car;
import com.vti.Kenzy.shop.Form.CarCreateForm;
import com.vti.Kenzy.shop.Form.CarUpdateForm;
import com.vti.Kenzy.shop.Mapper.CarMapper;
import com.vti.Kenzy.shop.Repository.CarRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@AllArgsConstructor
public class CarServiceImpl implements CarService
{
    private final CarRepository carRepository;

    @Override
    public Page<CarDto> findAll(Pageable pageable)
    {
        return carRepository.findAll(pageable).map(CarMapper::map);
    }

    @Override
    public CarDto create(CarCreateForm form)
    {
        var car = CarMapper.map(form);
        var savedCar = carRepository.save(car);
        return CarMapper.map(savedCar);
    }

    @Override
    public CarDto update(CarUpdateForm form)
    {
        return null;
    }

    @Override
    public void deleteById(Car.PrimaryKey id)
    {
        carRepository.deleteById(id);
    }
}
