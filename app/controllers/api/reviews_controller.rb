class Api::ReviewsController < ApplicationController
  before_action :set_item
  before_action :set_review, only: [:show, :update, :destroy]

  def index
    render json: @item.reviews
  end

  def create
  end

  def update
  end

  def destroy
  end

  private 

    def set_item 
      @item = Item.find(params[:item_id])
    end

    def set_review 
      @review = Review.find(params[:id])
    end

    def review_params 
      params.require(:review).permit(:title,)
    end 
end
