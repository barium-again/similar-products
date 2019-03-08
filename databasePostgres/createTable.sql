create table
if not exists categories
(
    id bigserial not null primary key, 
    categories varchar
(30)
);

create table
if not exists reviews
(
    id bigserial not null primary key,
    count integer,
    star_avg integer
);

create table
if not exists products
(
    id bigserial primary key,
    product_name varchar
(225) not null,
    size real[],
    descriptions varchar
(350),
    sku real,
    dateAdded varchar
(250),
    loves real,
    exclusive varchar
(5),
    online_only varchar
(5),
    limited_edition varchar
(5),
    free_shipping varchar
(5),
    price varchar
(7),
    product_image varchar
(350)
);