class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :title, nil: false
      t.float :position
      t.timestamps
    end
  end
end
