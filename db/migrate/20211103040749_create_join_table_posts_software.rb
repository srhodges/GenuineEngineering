class CreateJoinTablePostsSoftware < ActiveRecord::Migration[6.1]
  def change
    create_join_table :posts, :softwares do |t|
      # t.index [:post_id, :software_id]
      # t.index [:software_id, :post_id]
    end
  end
end
