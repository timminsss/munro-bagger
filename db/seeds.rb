# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'csv'

csv_test = File.read(Rails.root.join('lib', 'seeds', 'munros.csv'))
csv = CSV.parse(csv_test, :headers => true, :encoding => 'ISO-8859-1')

csv.each do |row|
  t = Munro.new
  t.name = row['Name']
  t.region = row['Region']
  t.altitude = row['Altitude']
  t.difficulty = row['Difficulty']
  t.bog = row['Bog Factor']
  t.distance = row['Distance']
  t.duration = row['Duration']
  t.latitude = row['Latitude']
  t.longitude = row['Longitude']
  t.save
end

User.first_or_create(email: "admin@admin.com", password: "password", password_confirmation: "password", role: "admin")
