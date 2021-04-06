class List < ApplicationRecord

    validates :movie_id, :user_id, presence: true
      
    belongs_to :movie,
        class_name:  :Movie,
        foreign_key: :movie_id  

    belongs_to :user,
        class_name:  :User,
        foreign_key: :user_id  

end