class AddSoftwareToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts , :software, :string
  end
end
