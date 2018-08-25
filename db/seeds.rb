# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'ffaker'

Brand.destroy_all
Category.destroy_all

product1 = Product.create(name: FFaker::Product.name, description: 'some description placeholder', price: 10.99, rating: 4, image_url: "https://www.placecage.com/200/300")
product2 = Product.create(name: FFaker::Product.name, description: 'some description placeholder', price: 11.99, rating: 4, image_url: "https://www.placecage.com/200/300")
product3 = Product.create(name: FFaker::Product.name, description: 'some description placeholder', price: 12.99, rating: 4, image_url: "https://www.placecage.com/200/300")
product4 = Product.create(name: FFaker::Product.name, description: 'some description placeholder', price: 13.99, rating: 4, image_url: "https://www.placecage.com/200/300")

category1 = Category.create(name: FFaker::Lorem.name, description: 'some description placeholder', image_url: "https://www.placecage.com/200/300")
category2 = Category.create(name: FFaker::Lorem.name, description: 'some description placeholder', image_url: "https://www.placecage.com/200/300")
brand1 = Brand.create(name: FFaker::Company.name, description: 'some description placeholder', image_url: "https://www.placecage.com/200/300")
brand2 = Brand.create(name: FFaker::Company.name, description: 'some description placeholder', image_url: "https://www.placecage.com/200/300")

category1.products << product1
category1.products << product2
brand1.products << product4
brand1.products << product3

category2.products << product3
category2.products << product4
brand2.products << product1
brand2.products << product2
