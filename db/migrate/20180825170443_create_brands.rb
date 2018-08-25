class CreateBrands < ActiveRecord::Migration[5.2]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :descriptions
      t.string :image_url

      t.timestamps
    end
  end
end
