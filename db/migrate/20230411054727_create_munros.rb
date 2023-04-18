class CreateMunros < ActiveRecord::Migration[7.0]
  def change
    create_table :munros do |t|
      t.string :name
      t.string :description
      t.integer :height
      t.string :region

      t.timestamps
    end
  end
end
