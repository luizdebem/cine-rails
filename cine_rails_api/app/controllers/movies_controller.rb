class MoviesController < ApplicationController
  def index
    if params[:title]
      movie = Movie.find_by_title(params[:title])
      if movie
        render json: MoviesRepresenter.new(movie).as_json, status: :ok
      else
        render json: {message: "Movie not found"}, status: :not_found
      end
    else
      movies = Movie.order('created_at DESC')
      render json: MoviesRepresenter.new(movies).as_json, status: :ok
    end
  end

  def show
    movie = Movie.find(params[:id])
    render json: MoviesRepresenter.new(movie).as_json, status: :ok 
  end

  def create
    director = Director.find_by_name(params['director']['name'])
    director == nil ? director = Director.create!(director_params) : nil;
    movie = Movie.new(movie_params.merge(director_id: director.id))
    if movie.save
      render json: MoviesRepresenter.new(movie).as_json, status: :created
    else
      render json: movie.errors, status: :unprocessable_entity
    end
  end

  def destroy
    Movie.find(params[:id]).destroy!
    head :no_content
  end

  def update
    movie = Movie.find(params[:id])
    if movie.update(movie_params)
      render json: MoviesRepresenter.new(movie).as_json, status: :ok
    else
      render json: movie.errors, status: :unprocessable_entity
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :synopsis, :rate, :director)
  end

  def director_params
    params.require(:director).permit(:name)
  end

end