class SoftwaresController < ApplicationController

  # GET /softwares
  def index
    @softwares = Software.all

    render json: @softwares
  end
end

  