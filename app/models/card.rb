class Card < ApplicationRecord
  belongs_to :list

  def board_id
    list.board_id
  end
end
