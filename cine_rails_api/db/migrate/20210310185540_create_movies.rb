class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :synopsis
      t.float :rate

      t.timestamps
    end
  end
end
