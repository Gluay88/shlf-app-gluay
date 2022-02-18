class CreateShlves < ActiveRecord::Migration[6.1]
  def change
    create_table :shlves do |t|
      t.string :name
      t.string :room_temp
      t.string :refrigerator_temp
      t.string :freezer_temp
      t.text :image

      t.timestamps
    end
  end
end
