import { CarProps } from "@/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "3810a9f8a0mshb8b8a9d95f24549p13038cjsn39ca560a33cd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const base = 50;
  const milage = 0.1;
  const age = 0.05;
  const milRate = city_mpg * milage;
  const ageRate = (new Date().getFullYear() - year) * age;
  const rent = base + milRate + ageRate;
  return rent.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};
