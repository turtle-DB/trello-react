require "test_helper"

class ListsAPITest < ActionDispatch::IntegrationTest
  class PostListsTest < ActionDispatch::IntegrationTest
    class ValidDataTest < ActionDispatch::IntegrationTest
      test "creates a new list" do
        assert_equal 0, List.count

        board = Board.create({title: "Test Board"})

        post "/api/lists",
          params: {board_id: board.id, list: {title: "Test List"}},
          headers: {"Accept" => "application/json"}

        assert_equal 1, List.count
      end

      test "associates list with board" do
        assert_equal 0, List.count

        board = Board.create({title: "Test Board"})

        post "/api/lists",
          params: {board_id: board.id, list: {title: "Test List"}},
          headers: {"Accept" => "application/json"}

        assert_equal board.id, List.first.board_id
      end
    end

    class InvalidDataTest < ActionDispatch::IntegrationTest
      test "returns a 404" do
        post "/api/lists",
          params: {board_id: 1000, list: {title: "Test List"}},
          headers: {"Accept" => "application/json"}

        assert_response 404
      end
    end
  end
end
