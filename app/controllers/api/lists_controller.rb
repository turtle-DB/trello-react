class Api::ListsController < ApplicationController
  def create
    board = Board.find(params[:board_id])

    @list = List.new(list_params.merge({board: board}))

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(", ")
      render "api/shared/error", status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid board id provided"
    render "api/shared/error", status: :not_found
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end

# {
#   "board_id": 1,
#   "list": {
#     "title": "My list"
#   }
# }
