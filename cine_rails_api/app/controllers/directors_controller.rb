class DirectorsController < ApplicationController
  def show
    director = Director.find(params[:id])
    movies = Movie.where(director_id: params[:id])
    render json: DirectorsRepresenter.new(director, movies).as_json, status: :ok 
  end
end