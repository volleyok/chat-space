class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_message_id = params[:last_id].to_i
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
  end
end

# class Api::MessagesController < ApplicationController
#   def index
#     @group = Group.find(params[:group_id]) #今いるグループの情報をパラムスの値を元にDBから取得。
#     last_message_id = params[:id].to_i
#     @messages = @group.messages.includes(:user).where('id > ?', params[:last_id]) #グループが所有しているメッセージの中から、params[:last_id]よりも大きいidがないかMessageから検索して、@messagesに代入。
#   end
# end