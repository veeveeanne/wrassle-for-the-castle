class V1::UsersController < ApplicationController
    def index
        render json: { :users => [
            {
                :user => 'some-thing'
            }
        ] }.to_json
    end
end