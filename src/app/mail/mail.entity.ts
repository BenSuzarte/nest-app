import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "mails" })
export class MailEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "destination_address", nullable: false })
  destinationAddress: string;

  @Column({ name: "due_date", type: "timestamp", nullable: false })
  dueDate: string;

  @Column()
  status: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: string;

  @CreateDateColumn({ name: "updated_at" })
  updatedAt: string;

  @CreateDateColumn({ name: "deleted_at" })
  deletedAt: string;

}
