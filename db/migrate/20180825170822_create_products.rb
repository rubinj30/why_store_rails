class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :price
      t.references :brand, foreign_key: true
      t.references :category, foreign_key: true
      t.boolean :availability
      t.string :image_url
      t.string :rating

      t.timestamps
    end
  end
end
