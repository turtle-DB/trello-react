class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, nil: false
      t.date :due_date
      t.string :labels, array: true
      t.string :description
      t.timestamps
    end
  end
end
