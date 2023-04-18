require "test_helper"

class MunrosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @munro = munros(:one)
  end

  test "should get index" do
    get munros_url, as: :json
    assert_response :success
  end

  test "should create munro" do
    assert_difference("Munro.count") do
      post munros_url, params: { munro: { description: @munro.description, height: @munro.height, name: @munro.name, region: @munro.region } }, as: :json
    end

    assert_response :created
  end

  test "should show munro" do
    get munro_url(@munro), as: :json
    assert_response :success
  end

  test "should update munro" do
    patch munro_url(@munro), params: { munro: { description: @munro.description, height: @munro.height, name: @munro.name, region: @munro.region } }, as: :json
    assert_response :success
  end

  test "should destroy munro" do
    assert_difference("Munro.count", -1) do
      delete munro_url(@munro), as: :json
    end

    assert_response :no_content
  end
end
