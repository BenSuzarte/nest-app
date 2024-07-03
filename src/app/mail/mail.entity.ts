import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "mails" })
export class MailEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: "destination_name", nullable: false })
  destinationName: string;

  @Column({ name: "destination_address", nullable: false })
  destinationAddress: string;

  @Column({ name: "due_date", type: "timestamp", nullable: false })
  dueDate: string;

  @Column({ type: "text", nullable: false })
  subject: string

  @Column({ type: "text", nullable: false })
  body: string

  @Column()
  status: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: string;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: string;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: string;

}
