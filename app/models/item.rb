class Item < ApplicationRecord
  belongs_to :department, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
