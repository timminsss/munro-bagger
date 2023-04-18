class AddInfoToMunros < ActiveRecord::Migration[7.0]
  def change
    add_column :munros, :altitude, :integer
    add_column :munros, :difficulty, :integer
    add_column :munros, :bog, :integer
    add_column :munros, :distance, :integer
    add_column :munros, :duration, :string
    add_column :munros, :latitude, :float
    add_column :munros, :longitude, :float

    remove_column :munros, :description, :string
    remove_column :munros, :height, :integer
  end
end
