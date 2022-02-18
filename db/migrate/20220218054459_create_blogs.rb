class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :name
      t.string :comment
      t.integer :user_id
      t.integer :shlf_id

      t.timestamps
    end
  end
end
