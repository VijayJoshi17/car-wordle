const cars = [
    // tesla
    {"name": "Tesla Model S", "company": "Tesla", "model": "Model S", "generation": "Gen 1", "country": "USA", "year": 2012, "body_style": "Sedan", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/tesla-models.jpeg"},
    {"name": "Tesla Model 3", "company": "Tesla", "model": "Model 3", "generation": "Gen 1", "country": "USA", "year": 2017, "body_style": "Sedan", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/tesla-model3.jpeg"},
    {"name": "Tesla Model X", "company": "Tesla", "model": "Model X", "generation": "Gen 1", "country": "USA", "year": 2015, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/tesla-modelx.jpeg"},
    {"name": "Tesla Model Y", "company": "Tesla", "model": "Model Y", "generation": "Gen 1", "country": "USA", "year": 2020, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/tesla-modely.jpeg"},
    // toyato
    {"name": "Toyota Corolla", "company": "Toyota", "model": "Corolla", "generation": "Gen 12", "country": "Japan", "year": 2019, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/toyota-corolla.jpeg"},
    {"name": "Toyota Camry", "company": "Toyota", "model": "Camry", "generation": "Gen 8", "country": "Japan", "year": 2017, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Hybrid", "image": "/images/toyota-camry.jpeg"},
    {"name": "Toyota RAV4", "company": "Toyota", "model": "RAV4", "generation": "Gen 5", "country": "Japan", "year": 2019, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/toyota-rav4.jpeg"},
    {"name": "Toyota Prius", "company": "Toyota", "model": "Prius", "generation": "Gen 4", "country": "Japan", "year": 2016, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Hybrid", "image": "/images/toyota-prius.jpeg"},
    {"name": "Toyota Highlander", "company": "Toyota", "model": "Highlander", "generation": "Gen 4", "country": "Japan", "year": 2020, "body_style": "SUV", "engine_type": "V6", "fuel_type": "Petrol / Hybrid", "image": "/images/toyota-highlander.jpeg"},
    {"name": "Toyota Land Cruiser", "company": "Toyota", "model": "Land Cruiser", "generation": "Gen 9", "country": "Japan", "year": 2021, "body_style": "SUV", "engine_type": "V6 Twin-Turbo", "fuel_type": "Petrol", "image": "/images/toyota-landcruiser.jpeg"},
    {"name": "Toyota Tacoma", "company": "Toyota", "model": "Tacoma", "generation": "Gen 3", "country": "Japan", "year": 2015, "body_style": "Pickup", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/toyota-tacoma.jpeg"},
    {"name": "Toyota Tundra", "company": "Toyota", "model": "Tundra", "generation": "Gen 3", "country": "Japan", "year": 2022, "body_style": "Pickup", "engine_type": "V6 Twin-Turbo", "fuel_type": "Petrol", "image": "/images/toyota-tundra.jpeg"},
    {"name": "Toyota C-HR", "company": "Toyota", "model": "C-HR", "generation": "Gen 1", "country": "Japan", "year": 2016, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/toyota-chr.jpeg"},
    {"name": "Toyota Supra", "company": "Toyota", "model": "Supra", "generation": "Gen 5", "country": "Japan", "year": 2019, "body_style": "Coupe", "engine_type": "Inline-6", "fuel_type": "Petrol", "image": "/images/toyota-supra.jpeg"},
    {"name": "Toyota Yaris", "company": "Toyota", "model": "Yaris", "generation": "Gen 4", "country": "Japan", "year": 2020, "body_style": "Hatchback", "engine_type": "Inline-3", "fuel_type": "Petrol / Hybrid", "image": "/images/toyota-yaris.jpeg"},
    {"name": "Toyota Sienna", "company": "Toyota", "model": "Sienna", "generation": "Gen 4", "country": "Japan", "year": 2021, "body_style": "Minivan", "engine_type": "Inline-4", "fuel_type": "Hybrid", "image": "/images/toyota-sienna.jpeg"},
    {"name": "Toyota Avalon", "company": "Toyota", "model": "Avalon", "generation": "Gen 5", "country": "Japan", "year": 2018, "body_style": "Sedan", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/toyota-avalon.jpeg"},
    // ford
    {"name": "Ford Mustang", "company": "Ford", "model": "Mustang", "generation": "Gen 6", "country": "USA", "year": 2015, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/ford-mustang.jpeg"},
    {"name": "Ford F-150", "company": "Ford", "model": "F-150", "generation": "Gen 14", "country": "USA", "year": 2021, "body_style": "Pickup", "engine_type": "V6 / V8", "fuel_type": "Petrol / Hybrid", "image": "/images/ford-f150.jpeg"},
    {"name": "Ford Explorer", "company": "Ford", "model": "Explorer", "generation": "Gen 6", "country": "USA", "year": 2020, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Hybrid", "image": "/images/ford-explorer.jpeg"},
    {"name": "Ford Escape", "company": "Ford", "model": "Escape", "generation": "Gen 4", "country": "USA", "year": 2020, "body_style": "SUV", "engine_type": "Inline-3 / Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/ford-escape.jpeg"},
    {"name": "Ford Edge", "company": "Ford", "model": "Edge", "generation": "Gen 2", "country": "USA", "year": 2015, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/ford-edge.jpeg"},
    {"name": "Ford Bronco", "company": "Ford", "model": "Bronco", "generation": "Gen 6", "country": "USA", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/ford-bronco.jpeg"},
    {"name": "Ford Ranger", "company": "Ford", "model": "Ranger", "generation": "Gen 4", "country": "USA", "year": 2019, "body_style": "Pickup", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/ford-ranger.jpeg"},
    {"name": "Ford Expedition", "company": "Ford", "model": "Expedition", "generation": "Gen 4", "country": "USA", "year": 2018, "body_style": "SUV", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/ford-expedition.jpeg"},
    {"name": "Ford Fusion", "company": "Ford", "model": "Fusion", "generation": "Gen 2", "country": "USA", "year": 2013, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/ford-fusion.jpeg"},
    {"name": "Ford Taurus", "company": "Ford", "model": "Taurus", "generation": "Gen 6", "country": "USA", "year": 2010, "body_style": "Sedan", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/ford-taurus.jpeg"},
    {"name": "Ford EcoSport", "company": "Ford", "model": "EcoSport", "generation": "Gen 2", "country": "USA", "year": 2018, "body_style": "SUV", "engine_type": "Inline-3 / Inline-4", "fuel_type": "Petrol", "image": "/images/ford-ecosport.jpeg"},
    {"name": "Ford Maverick", "company": "Ford", "model": "Maverick", "generation": "Gen 1", "country": "USA", "year": 2022, "body_style": "Pickup", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/ford-maverick.jpeg"},
    {"name": "Ford Mustang Mach-E", "company": "Ford", "model": "Mustang Mach-E", "generation": "Gen 1", "country": "USA", "year": 2021, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/ford-mustangmache.jpeg"},
    // honda
    {"name": "Honda Civic", "company": "Honda", "model": "Civic", "generation": "Gen 10", "country": "Japan", "year": 2016, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/honda-civic.jpeg"},
    {"name": "Honda Accord", "company": "Honda", "model": "Accord", "generation": "Gen 10", "country": "Japan", "year": 2018, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/honda-accord.jpeg"},
    {"name": "Honda CR-V", "company": "Honda", "model": "CR-V", "generation": "Gen 5", "country": "Japan", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/honda-crv.jpeg"},
    {"name": "Honda Pilot", "company": "Honda", "model": "Pilot", "generation": "Gen 3", "country": "Japan", "year": 2016, "body_style": "SUV", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/honda-pilot.jpeg"},
    {"name": "Honda HR-V", "company": "Honda", "model": "HR-V", "generation": "Gen 2", "country": "Japan", "year": 2015, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/honda-hrv.jpeg"},
    {"name": "Honda Odyssey", "company": "Honda", "model": "Odyssey", "generation": "Gen 5", "country": "Japan", "year": 2018, "body_style": "Minivan", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/honda-odyssey.jpeg"},
    
    // BMW Cars
    {"name": "BMW 3 Series", "company": "BMW", "model": "3 Series", "generation": "Gen 7", "country": "Germany", "year": 2019, "body_style": "Sedan", "engine_type": "Inline-4 / Inline-6", "fuel_type": "Petrol / Diesel", "image": "/images/bmw-3series.jpeg"},
    {"name": "BMW 5 Series", "company": "BMW", "model": "5 Series", "generation": "Gen 7", "country": "Germany", "year": 2017, "body_style": "Sedan", "engine_type": "Inline-4 / Inline-6", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/bmw-5series.jpeg"},
    {"name": "BMW X3", "company": "BMW", "model": "X3", "generation": "Gen 3", "country": "Germany", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4 / Inline-6", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/bmw-x3.jpeg"},
    {"name": "BMW X5", "company": "BMW", "model": "X5", "generation": "Gen 4", "country": "Germany", "year": 2019, "body_style": "SUV", "engine_type": "Inline-6 / V8", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/bmw-x5.jpeg"},
    {"name": "BMW i3", "company": "BMW", "model": "i3", "generation": "Gen 1", "country": "Germany", "year": 2013, "body_style": "Hatchback", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/bmw-i3.jpeg"},
    {"name": "BMW i8", "company": "BMW", "model": "i8", "generation": "Gen 1", "country": "Germany", "year": 2014, "body_style": "Coupe", "engine_type": "Hybrid", "fuel_type": "Petrol-Electric", "image": "/images/bmw-i8.jpeg"},
    
    // Hyundai Cars
    {"name": "Hyundai Elantra", "company": "Hyundai", "model": "Elantra", "generation": "Gen 7", "country": "South Korea", "year": 2021, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/hyundai-elantra.jpeg"},
    {"name": "Hyundai Sonata", "company": "Hyundai", "model": "Sonata", "generation": "Gen 8", "country": "South Korea", "year": 2019, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/hyundai-sonata.jpeg"},
    {"name": "Hyundai Tucson", "company": "Hyundai", "model": "Tucson", "generation": "Gen 4", "country": "South Korea", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Hybrid", "image": "/images/hyundai-tucson.jpeg"},
    {"name": "Hyundai Santa Fe", "company": "Hyundai", "model": "Santa Fe", "generation": "Gen 4", "country": "South Korea", "year": 2018, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/hyundai-santafe.jpeg"},
    {"name": "Hyundai Kona Electric", "company": "Hyundai", "model": "Kona Electric", "generation": "Gen 1", "country": "South Korea", "year": 2018, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/hyundai-konaelectric.jpeg"},
    {"name": "Hyundai Ioniq 5", "company": "Hyundai", "model": "Ioniq 5", "generation": "Gen 1", "country": "South Korea", "year": 2021, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/hyundai-ioniq5.jpeg"},
    // audi
    {"name": "Audi A4", "company": "Audi", "model": "A4", "generation": "Gen 5", "country": "Germany", "year": 2016, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/audi-a4.jpeg"},
    {"name": "Audi A6", "company": "Audi", "model": "A6", "generation": "Gen 5", "country": "Germany", "year": 2019, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/audi-a6.jpeg"},
    {"name": "Audi Q5", "company": "Audi", "model": "Q5", "generation": "Gen 2", "country": "Germany", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/audi-q5.jpeg"},
    {"name": "Audi Q7", "company": "Audi", "model": "Q7", "generation": "Gen 2", "country": "Germany", "year": 2015, "body_style": "SUV", "engine_type": "V6", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/audi-q7.jpeg"},
    {"name": "Audi e-tron", "company": "Audi", "model": "e-tron", "generation": "Gen 1", "country": "Germany", "year": 2019, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/audi-etron.jpeg"},
    {"name": "Audi R8", "company": "Audi", "model": "R8", "generation": "Gen 2", "country": "Germany", "year": 2015, "body_style": "Coupe", "engine_type": "V10", "fuel_type": "Petrol", "image": "/images/audi-r8.jpeg"},
    
    // Jeep Cars
    {"name": "Jeep Wrangler", "company": "Jeep", "model": "Wrangler", "generation": "Gen 4", "country": "USA", "year": 2018, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Diesel", "image": "/images/jeep-wrangler.jpeg"},
    {"name": "Jeep Grand Cherokee", "company": "Jeep", "model": "Grand Cherokee", "generation": "Gen 5", "country": "USA", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4 / V6 / V8", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/jeep-grandcherokee.jpeg"},
    {"name": "Jeep Cherokee", "company": "Jeep", "model": "Cherokee", "generation": "Gen 5", "country": "USA", "year": 2014, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/jeep-cherokee.jpeg"},
    {"name": "Jeep Compass", "company": "Jeep", "model": "Compass", "generation": "Gen 2", "country": "USA", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/jeep-compass.jpeg"},
    {"name": "Jeep Gladiator", "company": "Jeep", "model": "Gladiator", "generation": "Gen 1", "country": "USA", "year": 2019, "body_style": "Pickup", "engine_type": "V6", "fuel_type": "Petrol / Diesel", "image": "/images/jeep-gladiator.jpeg"},
    {"name": "Jeep Renegade", "company": "Jeep", "model": "Renegade", "generation": "Gen 1", "country": "USA", "year": 2015, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/jeep-renegade.jpeg"},

    // Porsche Cars
    {"name": "Porsche 911", "company": "Porsche", "model": "911", "generation": "Gen 8", "country": "Germany", "year": 2019, "body_style": "Coupe", "engine_type": "Flat-6", "fuel_type": "Petrol", "image": "/images/porsche-911.jpeg"},
    {"name": "Porsche Cayenne", "company": "Porsche", "model": "Cayenne", "generation": "Gen 3", "country": "Germany", "year": 2018, "body_style": "SUV", "engine_type": "V6 / V8", "fuel_type": "Petrol / Hybrid", "image": "/images/porsche-cayenne.jpeg"},
    {"name": "Porsche Macan", "company": "Porsche", "model": "Macan", "generation": "Gen 1", "country": "Germany", "year": 2014, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/porsche-macan.jpeg"},
    {"name": "Porsche Panamera", "company": "Porsche", "model": "Panamera", "generation": "Gen 2", "country": "Germany", "year": 2016, "body_style": "Sedan", "engine_type": "V6 / V8", "fuel_type": "Petrol / Hybrid", "image": "/images/porsche-panamera.jpeg"},
    {"name": "Porsche Taycan", "company": "Porsche", "model": "Taycan", "generation": "Gen 1", "country": "Germany", "year": 2020, "body_style": "Sedan", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/porsche-taycan.jpeg"},
    {"name": "Porsche 718 Boxster", "company": "Porsche", "model": "718 Boxster", "generation": "Gen 4", "country": "Germany", "year": 2016, "body_style": "Convertible", "engine_type": "Flat-4", "fuel_type": "Petrol", "image": "/images/porsche-718boxster.jpeg"},
    // Dodge Cars
    {"name": "Dodge Charger", "company": "Dodge", "model": "Charger", "generation": "Gen 7", "country": "USA", "year": 2011, "body_style": "Sedan", "engine_type": "V6 / V8", "fuel_type": "Petrol", "image": "/images/dodge-charger.jpeg"},
    {"name": "Dodge Challenger", "company": "Dodge", "model": "Challenger", "generation": "Gen 3", "country": "USA", "year": 2008, "body_style": "Coupe", "engine_type": "V6 / V8", "fuel_type": "Petrol", "image": "/images/dodge-challenger.jpeg"},
    {"name": "Dodge Durango", "company": "Dodge", "model": "Durango", "generation": "Gen 3", "country": "USA", "year": 2011, "body_style": "SUV", "engine_type": "V6 / V8", "fuel_type": "Petrol", "image": "/images/dodge-durango.jpeg"},
    {"name": "Dodge Journey", "company": "Dodge", "model": "Journey", "generation": "Gen 1", "country": "USA", "year": 2009, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/dodge-journey.jpeg"},
    {"name": "Dodge Viper", "company": "Dodge", "model": "Viper", "generation": "Gen 5", "country": "USA", "year": 2013, "body_style": "Coupe", "engine_type": "V10", "fuel_type": "Petrol", "image": "/images/dodge-viper.jpeg"},
    
    // Ferrari Cars
    {"name": "Ferrari 488", "company": "Ferrari", "model": "488", "generation": "Gen 1", "country": "Italy", "year": 2015, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/ferrari-488.jpeg"},
    {"name": "Ferrari F8 Tributo", "company": "Ferrari", "model": "F8 Tributo", "generation": "Gen 1", "country": "Italy", "year": 2019, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/ferrari-f8tributo.jpeg"},
    {"name": "Ferrari Portofino", "company": "Ferrari", "model": "Portofino", "generation": "Gen 1", "country": "Italy", "year": 2017, "body_style": "Convertible", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/ferrari-portofino.jpeg"},
    {"name": "Ferrari SF90 Stradale", "company": "Ferrari", "model": "SF90 Stradale", "generation": "Gen 1", "country": "Italy", "year": 2019, "body_style": "Coupe", "engine_type": "V8 Hybrid", "fuel_type": "Petrol-Electric", "image": "/images/ferrari-sf90.jpeg"},
    {"name": "Ferrari Roma", "company": "Ferrari", "model": "Roma", "generation": "Gen 1", "country": "Italy", "year": 2020, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/ferrari-roma.jpeg"},

    // Jaguar Cars
    {"name": "Jaguar F-Type", "company": "Jaguar", "model": "F-Type", "generation": "Gen 1", "country": "UK", "year": 2013, "body_style": "Coupe", "engine_type": "Inline-4 / V6 / V8", "fuel_type": "Petrol", "image": "/images/jaguar-ftype.jpeg"},
    {"name": "Jaguar XE", "company": "Jaguar", "model": "XE", "generation": "Gen 1", "country": "UK", "year": 2015, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Diesel", "image": "/images/jaguar-xe.jpeg"},
    {"name": "Jaguar XF", "company": "Jaguar", "model": "XF", "generation": "Gen 2", "country": "UK", "year": 2015, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Diesel", "image": "/images/jaguar-xf.jpeg"},
    {"name": "Jaguar E-Pace", "company": "Jaguar", "model": "E-Pace", "generation": "Gen 1", "country": "UK", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/jaguar-epace.jpeg"},
    {"name": "Jaguar I-Pace", "company": "Jaguar", "model": "I-Pace", "generation": "Gen 1", "country": "UK", "year": 2018, "body_style": "SUV", "engine_type": "Electric", "fuel_type": "Electric", "image": "/images/jaguar-ipace.jpeg"},

    // Lamborghini Cars
    {"name": "Lamborghini Huracan", "company": "Lamborghini", "model": "Huracan", "generation": "Gen 1", "country": "Italy", "year": 2014, "body_style": "Coupe", "engine_type": "V10", "fuel_type": "Petrol", "image": "/images/lamborghini-huracan.jpeg"},
    {"name": "Lamborghini Aventador", "company": "Lamborghini", "model": "Aventador", "generation": "Gen 1", "country": "Italy", "year": 2011, "body_style": "Coupe", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/lamborghini-aventador.jpeg"},
    {"name": "Lamborghini Urus", "company": "Lamborghini", "model": "Urus", "generation": "Gen 1", "country": "Italy", "year": 2018, "body_style": "SUV", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/lamborghini-urus.jpeg"},
    
    // Nissan Cars
    {"name": "Nissan GT-R", "company": "Nissan", "model": "GT-R", "generation": "Gen 6", "country": "Japan", "year": 2007, "body_style": "Coupe", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/nissan-gtr.jpeg"},
    {"name": "Nissan 370Z", "company": "Nissan", "model": "370Z", "generation": "Gen 1", "country": "Japan", "year": 2008, "body_style": "Coupe", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/nissan-370z.jpeg"},
    {"name": "Nissan Altima", "company": "Nissan", "model": "Altima", "generation": "Gen 6", "country": "Japan", "year": 2018, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/nissan-altima.jpeg"},
    {"name": "Nissan Maxima", "company": "Nissan", "model": "Maxima", "generation": "Gen 8", "country": "Japan", "year": 2015, "body_style": "Sedan", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/nissan-maxima.jpeg"},
    {"name": "Nissan Rogue", "company": "Nissan", "model": "Rogue", "generation": "Gen 3", "country": "Japan", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/nissan-rogue.jpeg"},
    
    // Bugatti Cars
    {"name": "Bugatti Veyron", "company": "Bugatti", "model": "Veyron", "generation": "Gen 1", "country": "France", "year": 2005, "body_style": "Coupe", "engine_type": "W16", "fuel_type": "Petrol", "image": "/images/bugatti-veyron.jpeg"},
    {"name": "Bugatti Chiron", "company": "Bugatti", "model": "Chiron", "generation": "Gen 1", "country": "France", "year": 2016, "body_style": "Coupe", "engine_type": "W16", "fuel_type": "Petrol", "image": "/images/bugatti-chiron.jpeg"},
    {"name": "Bugatti Divo", "company": "Bugatti", "model": "Divo", "generation": "Gen 1", "country": "France", "year": 2018, "body_style": "Coupe", "engine_type": "W16", "fuel_type": "Petrol", "image": "/images/bugatti-divo.jpeg"},
    {"name": "Bugatti Centodieci", "company": "Bugatti", "model": "Centodieci", "generation": "Gen 1", "country": "France", "year": 2020, "body_style": "Coupe", "engine_type": "W16", "fuel_type": "Petrol", "image": "/images/bugatti-centodieci.jpeg"},
    {"name": "Bugatti La Voiture Noire", "company": "Bugatti", "model": "La Voiture Noire", "generation": "Unique", "country": "France", "year": 2019, "body_style": "Coupe", "engine_type": "W16", "fuel_type": "Petrol", "image": "/images/bugatti-lavoiturenoire.jpeg"},
    
    // Rolls-Royce Cars
    {"name": "Rolls-Royce Phantom", "company": "Rolls-Royce", "model": "Phantom", "generation": "Gen 8", "country": "UK", "year": 2017, "body_style": "Sedan", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/rollsroyce-phantom.jpeg"},
    {"name": "Rolls-Royce Ghost", "company": "Rolls-Royce", "model": "Ghost", "generation": "Gen 2", "country": "UK", "year": 2020, "body_style": "Sedan", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/rollsroyce-ghost.jpeg"},
    {"name": "Rolls-Royce Wraith", "company": "Rolls-Royce", "model": "Wraith", "generation": "Gen 1", "country": "UK", "year": 2013, "body_style": "Coupe", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/rollsroyce-wraith.jpeg"},
    {"name": "Rolls-Royce Cullinan", "company": "Rolls-Royce", "model": "Cullinan", "generation": "Gen 1", "country": "UK", "year": 2018, "body_style": "SUV", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/rollsroyce-cullinan.jpeg"},
    
    // Aston Martin Cars
    {"name": "Aston Martin DB11", "company": "Aston Martin", "model": "DB11", "generation": "Gen 1", "country": "UK", "year": 2016, "body_style": "Coupe", "engine_type": "V8 / V12", "fuel_type": "Petrol", "image": "/images/astonmartin-db11.jpeg"},
    {"name": "Aston Martin Vantage", "company": "Aston Martin", "model": "Vantage", "generation": "Gen 2", "country": "UK", "year": 2018, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/astonmartin-vantage.jpeg"},
    {"name": "Aston Martin DBS Superleggera", "company": "Aston Martin", "model": "DBS Superleggera", "generation": "Gen 1", "country": "UK", "year": 2018, "body_style": "Coupe", "engine_type": "V12", "fuel_type": "Petrol", "image": "/images/astonmartin-dbs.jpeg"},
    {"name": "Aston Martin DBX", "company": "Aston Martin", "model": "DBX", "generation": "Gen 1", "country": "UK", "year": 2020, "body_style": "SUV", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/astonmartin-dbx.jpeg"},

    // Chevrolet Cars
    {"name": "Chevrolet Camaro", "company": "Chevrolet", "model": "Camaro", "generation": "Gen 6", "country": "USA", "year": 2016, "body_style": "Coupe", "engine_type": "Inline-4 / V6 / V8", "fuel_type": "Petrol", "image": "/images/chevrolet-camaro.jpeg"},
    {"name": "Chevrolet Corvette", "company": "Chevrolet", "model": "Corvette", "generation": "Gen 8", "country": "USA", "year": 2020, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/chevrolet-corvette.jpeg"},
    {"name": "Chevrolet Silverado", "company": "Chevrolet", "model": "Silverado", "generation": "Gen 4", "country": "USA", "year": 2019, "body_style": "Pickup", "engine_type": "V6 / V8", "fuel_type": "Petrol / Diesel", "image": "/images/chevrolet-silverado.jpeg"},
    {"name": "Chevrolet Tahoe", "company": "Chevrolet", "model": "Tahoe", "generation": "Gen 5", "country": "USA", "year": 2021, "body_style": "SUV", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/chevrolet-tahoe.jpeg"},

    // Kia Cars
    {"name": "Kia Stinger", "company": "Kia", "model": "Stinger", "generation": "Gen 1", "country": "South Korea", "year": 2017, "body_style": "Sedan", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol", "image": "/images/kia-stinger.jpeg"},
    {"name": "Kia Seltos", "company": "Kia", "model": "Seltos", "generation": "Gen 1", "country": "South Korea", "year": 2019, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/kia-seltos.jpeg"},
    {"name": "Kia Telluride", "company": "Kia", "model": "Telluride", "generation": "Gen 1", "country": "South Korea", "year": 2020, "body_style": "SUV", "engine_type": "V6", "fuel_type": "Petrol", "image": "/images/kia-telluride.jpeg"},
    {"name": "Kia Sportage", "company": "Kia", "model": "Sportage", "generation": "Gen 5", "country": "South Korea", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/kia-sportage.jpeg"},

    // Mercedes-Benz Cars
    {"name": "Mercedes-Benz C-Class", "company": "Mercedes-Benz", "model": "C-Class", "generation": "Gen 5", "country": "Germany", "year": 2021, "body_style": "Sedan", "engine_type": "Inline-4 / Inline-6", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/mercedes-cclass.jpeg"},
    {"name": "Mercedes-Benz E-Class", "company": "Mercedes-Benz", "model": "E-Class", "generation": "Gen 5", "country": "Germany", "year": 2016, "body_style": "Sedan", "engine_type": "Inline-4 / Inline-6 / V8", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/mercedes-eclass.jpeg"},
    {"name": "Mercedes-Benz S-Class", "company": "Mercedes-Benz", "model": "S-Class", "generation": "Gen 7", "country": "Germany", "year": 2020, "body_style": "Sedan", "engine_type": "Inline-6 / V8", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/mercedes-sclass.jpeg"},
    {"name": "Mercedes-Benz G-Class", "company": "Mercedes-Benz", "model": "G-Class", "generation": "Gen 2", "country": "Germany", "year": 2018, "body_style": "SUV", "engine_type": "V8", "fuel_type": "Petrol / Diesel", "image": "/images/mercedes-gclass.jpeg"},

    // Volkswagen Cars
    {"name": "Volkswagen Golf", "company": "Volkswagen", "model": "Golf", "generation": "Gen 8", "country": "Germany", "year": 2020, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/vw-golf.jpeg"},
    {"name": "Volkswagen Passat", "company": "Volkswagen", "model": "Passat", "generation": "Gen 8", "country": "Germany", "year": 2015, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/vw-passat.jpeg"},
    {"name": "Volkswagen Tiguan", "company": "Volkswagen", "model": "Tiguan", "generation": "Gen 2", "country": "Germany", "year": 2016, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/vw-tiguan.jpeg"},
    {"name": "Volkswagen Touareg", "company": "Volkswagen", "model": "Touareg", "generation": "Gen 3", "country": "Germany", "year": 2018, "body_style": "SUV", "engine_type": "V6 / V8", "fuel_type": "Petrol / Diesel", "image": "/images/vw-touareg.jpeg"},

    // McLaren Cars
    {"name": "McLaren 720S", "company": "McLaren", "model": "720S", "generation": "Gen 1", "country": "UK", "year": 2017, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/mclaren-720s.jpeg"},
    {"name": "McLaren GT", "company": "McLaren", "model": "GT", "generation": "Gen 1", "country": "UK", "year": 2019, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/mclaren-gt.jpeg"},
    {"name": "McLaren Senna", "company": "McLaren", "model": "Senna", "generation": "Gen 1", "country": "UK", "year": 2018, "body_style": "Coupe", "engine_type": "V8", "fuel_type": "Petrol", "image": "/images/mclaren-senna.jpeg"},
    {"name": "McLaren Artura", "company": "McLaren", "model": "Artura", "generation": "Gen 1", "country": "UK", "year": 2021, "body_style": "Coupe", "engine_type": "V6 Hybrid", "fuel_type": "Petrol / Electric", "image": "/images/mclaren-artura.jpeg"},

    // Fiat Cars
    {"name": "Fiat 500", "company": "Fiat", "model": "500", "generation": "Gen 3", "country": "Italy", "year": 2007, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Electric", "image": "/images/fiat-500.jpeg"},
    {"name": "Fiat Panda", "company": "Fiat", "model": "Panda", "generation": "Gen 3", "country": "Italy", "year": 2011, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/fiat-panda.jpeg"},
    {"name": "Fiat Tipo", "company": "Fiat", "model": "Tipo", "generation": "Gen 2", "country": "Italy", "year": 2015, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/fiat-tipo.jpeg"},
    {"name": "Fiat 124 Spider", "company": "Fiat", "model": "124 Spider", "generation": "Gen 2", "country": "Italy", "year": 2016, "body_style": "Convertible", "engine_type": "Inline-4", "fuel_type": "Petrol", "image": "/images/fiat-124spider.jpeg"},
    // Land Rover Cars
    {"name": "Land Rover Defender", "company": "Land Rover", "model": "Defender", "generation": "Gen 2", "country": "UK", "year": 2020, "body_style": "SUV", "engine_type": "Inline-4 / Inline-6 / V8", "fuel_type": "Petrol / Diesel", "image": "/images/landrover-defender.jpeg"},
    {"name": "Land Rover Discovery", "company": "Land Rover", "model": "Discovery", "generation": "Gen 5", "country": "UK", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4 / V6", "fuel_type": "Petrol / Diesel", "image": "/images/landrover-discovery.jpeg"},
    {"name": "Range Rover", "company": "Land Rover", "model": "Range Rover", "generation": "Gen 4", "country": "UK", "year": 2012, "body_style": "SUV", "engine_type": "Inline-6 / V8", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/landrover-rangerover.jpeg"},
    {"name": "Range Rover Evoque", "company": "Land Rover", "model": "Range Rover Evoque", "generation": "Gen 2", "country": "UK", "year": 2018, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/landrover-evoque.jpeg"},

    // Renault Cars
    {"name": "Renault Clio", "company": "Renault", "model": "Clio", "generation": "Gen 5", "country": "France", "year": 2019, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/renault-clio.jpeg"},
    {"name": "Renault Megane", "company": "Renault", "model": "Megane", "generation": "Gen 4", "country": "France", "year": 2016, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/renault-megane.jpeg"},
    {"name": "Renault Captur", "company": "Renault", "model": "Captur", "generation": "Gen 2", "country": "France", "year": 2019, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/renault-captur.jpeg"},
    {"name": "Renault Duster", "company": "Renault", "model": "Duster", "generation": "Gen 2", "country": "France", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/renault-duster.jpeg"},

    // Skoda Cars
    {"name": "Skoda Octavia", "company": "Skoda", "model": "Octavia", "generation": "Gen 4", "country": "Czech Republic", "year": 2019, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/skoda-octavia.jpeg"},
    {"name": "Skoda Superb", "company": "Skoda", "model": "Superb", "generation": "Gen 3", "country": "Czech Republic", "year": 2015, "body_style": "Sedan", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel / Hybrid", "image": "/images/skoda-superb.jpeg"},
    {"name": "Skoda Kodiaq", "company": "Skoda", "model": "Kodiaq", "generation": "Gen 1", "country": "Czech Republic", "year": 2016, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/skoda-kodiaq.jpeg"},
    {"name": "Skoda Kamiq", "company": "Skoda", "model": "Kamiq", "generation": "Gen 1", "country": "Czech Republic", "year": 2019, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/skoda-kamiq.jpeg"},

    // Tata Cars
    {"name": "Tata Nexon", "company": "Tata", "model": "Nexon", "generation": "Gen 1", "country": "India", "year": 2017, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/tata-nexon.jpeg"},
    {"name": "Tata Harrier", "company": "Tata", "model": "Harrier", "generation": "Gen 1", "country": "India", "year": 2019, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Diesel", "image": "/images/tata-harrier.jpeg"},
    {"name": "Tata Safari", "company": "Tata", "model": "Safari", "generation": "Gen 2", "country": "India", "year": 2021, "body_style": "SUV", "engine_type": "Inline-4", "fuel_type": "Diesel", "image": "/images/tata-safari.jpeg"},
    {"name": "Tata Altroz", "company": "Tata", "model": "Altroz", "generation": "Gen 1", "country": "India", "year": 2020, "body_style": "Hatchback", "engine_type": "Inline-4", "fuel_type": "Petrol / Diesel", "image": "/images/tata-altroz.jpeg"}

];

// Export the cars array
export default cars;
