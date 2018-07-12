class AddDefaultCardLabels < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:cards, :labels, [])
  end
end
