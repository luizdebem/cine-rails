class DirectorsRepresenter
  def initialize(director, movies)
    @director = director
    @movies = movies
  end

  def as_json
    moviesFormat =       @movies.map do |movie|
      {
        id: movie.id,
        title: movie.title,
        year: movie.year, 
        synopsis: movie.synopsis,
        rate: movie.rate,
      }
    end
    {
      id: @director.id,
      name: @director.name,
      movies: moviesFormat
    }
  end

  private
  attr_reader :directors
end