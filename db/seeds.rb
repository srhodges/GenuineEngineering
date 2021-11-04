# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Software.destroy_all
Post.destroy_all
User.destroy_all



@admin = User.create!(username: 'steph', email: 'steph@stephemail.com', password: 'steph92')

puts "#{User.count} users created"

10.times do
  Post.create!(name: Faker::App.name, user: @admin)
end

puts "#{Post.count} post created"

@javascript = Software.create!(name: 'javascript')
@reactjs = Software.create!(name: 'reactjs')
@css = Software.create!(name: 'css')
@ruby = Software.create!(name: 'ruby')
@python = Software.create!(name: 'python')

puts "#{Software.count} software updated"

Post.all.each do |post|
  rand(1..5).times do
    post.softwares << Software.all.sample
  end
end