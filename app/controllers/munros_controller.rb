# class Api::V1::MunrosController < ApplicationController
class MunrosController < ApplicationController
  before_action :set_munro, only: %i[ show update destroy ]

  # GET /munros
  def index
    @munros = Munro.all

    render json: @munros
  end

  # GET /munros/1
  def show
    render json: @munro
  end

  # POST /munros
  def create
    @munro = Munro.new(munro_params)

    if @munro.save
      render json: @munro, status: :created, location: @munro
    else
      render json: @munro.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /munros/1
  def update
    if @munro.update(munro_params)
      render json: @munro
    else
      render json: @munro.errors, status: :unprocessable_entity
    end
  end

  # DELETE /munros/1
  def destroy
    @munro.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_munro
      @munro = Munro.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def munro_params
      params.require(:munro).permit(:name, :description, :height, :region)
    end
end
